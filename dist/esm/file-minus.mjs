export const name="file-minus";
export const id="dl_4208f31987894dbc9b69";
export const url=new URL("../icons/file-minus.svg?v=2a17f70cc031fe881bcc009e5e9a873e4884e62a984bea2b56614083f1dd3788",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
