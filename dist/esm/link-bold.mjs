export const name="link-bold";
export const id="dl_41f03331d0c04def8e71";
export const url=new URL("../icons/link-bold.svg?v=087d63d78d4a37d570853cb62e688323759cda2081b22455674544f87adc3444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
