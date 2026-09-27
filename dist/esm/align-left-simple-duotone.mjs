export const name="align-left-simple-duotone";
export const id="dl_4bfe7996a5ca4c52a09d";
export const url=new URL("../icons/align-left-simple-duotone.svg?v=04aade38e9dfcea160ee016b05dcf1a16291d559315f802834a9c57bb27dc03c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
