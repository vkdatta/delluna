export const name="envelope-simple-open-bold";
export const id="dl_8dd0d52b9a7f40988405";
export const url=new URL("../icons/envelope-simple-open-bold.svg?v=0a49ea0b317290ebb3a19fca6e733b4465c07ea91a4f5b88148660f2b093bc58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
