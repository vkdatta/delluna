export const name="speaker_2";
export const id="dl_0c493cac84e50169cfb3";
export const url=new URL("../icons/speaker_2.svg?v=bdb3288a7a257255ccbed3334a6a5ce35c16d1f1d55cef9eb6f7b46a1e88ecfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
