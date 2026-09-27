export const name="face_right-fill";
export const id="dl_fcf99f51f714e8fbad5a";
export const url=new URL("../icons/face_right-fill.svg?v=178aace7d0d67dfcd17eb9d63c8f9dea5269d62a21c2cf02eb01e2e60f2d0cb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
