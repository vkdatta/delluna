export const name="cloud-arrow-up-bold";
export const id="dl_14338833387e4d7aa0a6";
export const url=new URL("../icons/cloud-arrow-up-bold.svg?v=15d35a5dc9efac91d5ab73c7b7b08056a199c97d0c711d14bb69d750d09d2e93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
