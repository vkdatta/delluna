export const name="cursor-bold";
export const id="dl_cb733fb4d34344b38973";
export const url=new URL("../icons/cursor-bold.svg?v=d92941bcbe89f5543d07ea8b45335beb9aa16e5f9d31377dc257b8fe96e68862",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
