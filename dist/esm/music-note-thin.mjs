export const name="music-note-thin";
export const id="dl_c147c250f32443df92db";
export const url=new URL("../icons/music-note-thin.svg?v=9d8e8ffe29a4e565f574c3be229d8616272ebc3ffd503b287f6029ff24bf7f2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
