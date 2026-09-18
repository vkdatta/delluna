export const name="bottom_app_bar";
export const id="dl_d3e6cf61eb7443bb9db8";
export const url=new URL("../icons/bottom_app_bar.svg?v=754ad8a8c06139cf717079001fb40607bb1f822aae463f1ab12d2efef645a1a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
