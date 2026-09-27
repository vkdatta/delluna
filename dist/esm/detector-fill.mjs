export const name="detector-fill";
export const id="dl_9db3e681d32a30fbc7e2";
export const url=new URL("../icons/detector-fill.svg?v=a378554ddab0ba709370d89cff225eb4162f195eef89dac8874313324933ddf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
