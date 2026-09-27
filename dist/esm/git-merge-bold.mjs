export const name="git-merge-bold";
export const id="dl_ce0a37f5c7f0452fad86";
export const url=new URL("../icons/git-merge-bold.svg?v=8036cf0c4fcf60044f009c478b1a09995f12bd9625b1d8164d31922e40bda606",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
