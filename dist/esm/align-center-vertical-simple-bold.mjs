export const name="align-center-vertical-simple-bold";
export const id="dl_19cae5c4203f4ed398f7";
export const url=new URL("../icons/align-center-vertical-simple-bold.svg?v=347eceb5b5fa82a3a5e6fd81ccd166e33a9204ed89e20ba0f2932f31f3e4b08e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
