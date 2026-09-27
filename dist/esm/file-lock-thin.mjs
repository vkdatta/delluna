export const name="file-lock-thin";
export const id="dl_71df01e216434b84917a";
export const url=new URL("../icons/file-lock-thin.svg?v=eb9eeb5e31324b9911af8e7dfcb59c7ab196169f8ef71a77f836ee1711bf1b78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
