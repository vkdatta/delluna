export const name="counter_6";
export const id="dl_f260559d668a3dab1f86";
export const url=new URL("../icons/counter_6.svg?v=b61c3170d88857ffc3776c4f2fd86fd243682e4867f72f9c29106e1d624091d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
