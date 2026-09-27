export const name="binoculars";
export const id="dl_3d8a79c796d04f73a43d";
export const url=new URL("../icons/binoculars.svg?v=9c94dfe87160f6a1a46b2fb719249a546e2b69a362af6cc6122866883bbe07b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
