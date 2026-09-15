export const name="coffee_maker-fill";
export const id="dl_e100cbf334644d64801e";
export const url=new URL("../icons/C/coffee_maker-fill.svg?v=d506520482ad70f7ce3384b7ffcb48d4b69728ad2a9affa12fd289d7de7460a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
