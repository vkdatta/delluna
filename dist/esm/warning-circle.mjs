export const name="warning-circle";
export const id="dl_5f72c2d250bc57346d32";
export const url=new URL("../icons/warning-circle.svg?v=09deb8d56db52378e92a453aa7e5287534e05dffa0e58e7745a5c3e1cece356a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
