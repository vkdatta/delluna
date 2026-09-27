export const name="music-note-simple";
export const id="dl_b94f6bae6361444b821a";
export const url=new URL("../icons/music-note-simple.svg?v=05469b0d2edc3fa69c3878c9ca8753fdec8dcae67617ca635e461684376a324c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
