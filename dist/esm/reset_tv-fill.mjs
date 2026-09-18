export const name="reset_tv-fill";
export const id="dl_d84eab6460f44e67b1b7";
export const url=new URL("../icons/reset_tv-fill.svg?v=ac8e06f82b059d94895d2bff9db5c23afb8c627bfc28aaa466fbadab4c147786",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
