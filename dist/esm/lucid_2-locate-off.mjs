export const name="lucid_2-locate-off";
export const id="dl_d6849015aa6b4a01893f";
export const url=new URL("../icons/lucid_2-locate-off.svg?v=006133c2b5d43a9fa93e8d69f14ad47553ad1adce9f85054d83435d85c666214",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
