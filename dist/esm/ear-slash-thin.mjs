export const name="ear-slash-thin";
export const id="dl_b78acb17aeca45e98ecf";
export const url=new URL("../icons/ear-slash-thin.svg?v=d031d13d60079da13cd971a7b05b95493b18d983c9f8ed73b7e347cb2e3f0c71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
