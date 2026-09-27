export const name="arrow-elbow-up-left-light";
export const id="dl_5b25a29e6d9e47f48b64";
export const url=new URL("../icons/arrow-elbow-up-left-light.svg?v=582648d7653cafc8c404a7a12acf4dccb320435ce18e44bc35e45284fdc38da1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
