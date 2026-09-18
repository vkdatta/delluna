export const name="check_circle-fill";
export const id="dl_2957f678545e44f3b28e";
export const url=new URL("../icons/check_circle-fill.svg?v=cc215e57620be3ba7c42ddfbfe353fabb8a4d0aeb34abebcc832e86bfdf85bd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
