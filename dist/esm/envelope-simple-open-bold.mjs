export const name="envelope-simple-open-bold";
export const id="dl_8dd0d52b9a7f40988405";
export const url=new URL("../icons/envelope-simple-open-bold.svg?v=d0be0f02c9444548fddf4c0a9f234e4eee1167fbacbe3e85713ffdaa335c79ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
