export const name="file-x-duotone";
export const id="dl_b6eb7ef288294f0abf25";
export const url=new URL("../icons/file-x-duotone.svg?v=f63fba295b7218225a2773d4fbb1b3cfe7569878cfc9875f4bca676813603bd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
