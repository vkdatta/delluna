export const name="line-segment";
export const id="dl_ed08c186411242da9302";
export const url=new URL("../icons/line-segment.svg?v=485f5621095523e0c9fbfb49096140de609951fa26d139a5aa10ec16e88b8d4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
