export const name="google-logo";
export const id="dl_d35e518ea63b4ce8acca";
export const url=new URL("../icons/google-logo.svg?v=baf7df435cf4c47c148d448c7f29ddd6118ebb589baa3f0fcd71438093aa3cb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
