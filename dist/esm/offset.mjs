export const name="offset";
export const id="dl_559420d9b80942c4aa91";
export const url=new URL("../icons/offset.svg?v=a598a4f6893fadc1aa0591193aaf501aec842733fd694d1afeccaf58d722b32e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
