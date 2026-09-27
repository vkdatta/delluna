export const name="bell-z-bold";
export const id="dl_25afe6de854047b88419";
export const url=new URL("../icons/bell-z-bold.svg?v=f089ed560cb9f75bd8de694f62190e14c3d2f2e2baf379be1ddad1c747861f6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
