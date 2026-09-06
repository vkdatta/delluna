export const name="apple-podcasts-logo-thin";
export const id="dl_3e9dd5bbe9d442e9aef1";
export const url=new URL("../icons/apple-podcasts-logo-thin.svg?v=b0154a608110864f2b784dca6b83da608f3cf33bab2b7a2ad68632deff941e33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
