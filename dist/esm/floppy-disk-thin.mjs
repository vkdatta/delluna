export const name="floppy-disk-thin";
export const id="dl_b5ab5936bafe4d768133";
export const url=new URL("../icons/floppy-disk-thin.svg?v=29ebbf05e482a9a9fe493a1430a93c40f71fb706cf7545e894eb5442f60ea57c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
