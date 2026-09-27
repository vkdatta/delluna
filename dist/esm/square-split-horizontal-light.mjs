export const name="square-split-horizontal-light";
export const id="dl_389e412c923864b56d88";
export const url=new URL("../icons/square-split-horizontal-light.svg?v=a1cccea9fbf8349d47068ee8fc761f9278bdbf39c2e5185a8562c1007024285a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
