export const name="arrow-elbow-up-left-light";
export const id="dl_5b25a29e6d9e47f48b64";
export const url=new URL("../icons/arrow-elbow-up-left-light.svg?v=7b85ea4c3e2d67197edf1cae4a15ca4b4263f9e1a33e8eec07a4808fa3169f69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
