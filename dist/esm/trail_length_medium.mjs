export const name="trail_length_medium";
export const id="dl_881b583069ce54320d5a";
export const url=new URL("../icons/trail_length_medium.svg?v=7d872c931c2e00565c00dd89d08890de16abae47c722b7c809daa084f3952861",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
