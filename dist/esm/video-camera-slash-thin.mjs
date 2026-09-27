export const name="video-camera-slash-thin";
export const id="dl_e6d4b1238c73eaed4f37";
export const url=new URL("../icons/video-camera-slash-thin.svg?v=ed942392bbebccc222fdc6c090327407964ec29a05c30cde575534c5fb47fbe0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
