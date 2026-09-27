export const name="warning-diamond-thin";
export const id="dl_4dc6809fd81f8e9d4556";
export const url=new URL("../icons/warning-diamond-thin.svg?v=3c7b021fa5b29e73c397a8b7ff417aec85d8157fb9aae47e575a2c578f5f8678",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
