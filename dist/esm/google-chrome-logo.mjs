export const name="google-chrome-logo";
export const id="dl_ad8120c7602f4c8b9abb";
export const url=new URL("../icons/google-chrome-logo.svg?v=41be6a6e32bd94629e93d37786c8803c30f06df812fd2546079c7ed11ecd03d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
