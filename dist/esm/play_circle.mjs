export const name="play_circle";
export const id="dl_35dd00f52eccbc88a7fd";
export const url=new URL("../icons/play_circle.svg?v=1afb1ad1a58c90bfe3109254f7c8312abf88d3e6e2b62ebd62134e490a7065e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
