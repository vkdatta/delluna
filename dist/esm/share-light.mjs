export const name="share-light";
export const id="dl_a9963d8e755b48f1b1f0";
export const url=new URL("../icons/S/share-light.svg?v=69ef2902e7b42fe82dc855086fc7c0f8ad9c33bb135182ba67f252342b8e41fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
