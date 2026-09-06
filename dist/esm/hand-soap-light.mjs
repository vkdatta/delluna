export const name="hand-soap-light";
export const id="dl_ba3cae7d4b4542f296cc";
export const url=new URL("../icons/hand-soap-light.svg?v=a0d2e05ae27cd8b715064a121121cd7c7e40de6237e6706923e153f0316b0788",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
