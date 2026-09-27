export const name="arrow-circle-up";
export const id="dl_c12e5b3ed3f44690830a";
export const url=new URL("../icons/arrow-circle-up.svg?v=e7a37579a2d8956c754f75ec8f3b911999bdfb2e645dd95725807de86f0ac8f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
