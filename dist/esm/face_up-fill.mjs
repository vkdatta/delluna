export const name="face_up-fill";
export const id="dl_dca12a71972c4283aedc";
export const url=new URL("../icons/F/face_up-fill.svg?v=1d49767df3f3743bfc17cabdd09ddf422cfd916882acfc89e6d4efe68dfc8b0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
