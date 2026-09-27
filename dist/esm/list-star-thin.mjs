export const name="list-star-thin";
export const id="dl_67098f8862fc40b8ba53";
export const url=new URL("../icons/list-star-thin.svg?v=a884bc5e8ebfb2d2cfcf2b4804c94c1ccca0e341043723fa15ed7c71995584f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
