export const name="notion-logo";
export const id="dl_56845ab692944d56b30a";
export const url=new URL("../icons/notion-logo.svg?v=ae23230e0ad78482ddac4c1a9c70f182127adffe2228ed1c3007d878757e39cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
