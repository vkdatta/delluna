export const name="video-thin";
export const id="dl_9eb2b45125ce4cb88ca1";
export const url=new URL("../icons/video-thin.svg?v=239986861bf9c9c261bb01ab3e4e4dd69f905308b4977e050317d3ac21c7874b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
