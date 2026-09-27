export const name="network-slash-light";
export const id="dl_84c316f0f1bd4d318ba9";
export const url=new URL("../icons/network-slash-light.svg?v=171c4ce94a12ef3430b5b830bc626accba59a6bdeb6a641f7094f7229d2a6007",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
