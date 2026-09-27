export const name="arrow-elbow-up-right-light";
export const id="dl_1013cdff7ea2486d9837";
export const url=new URL("../icons/arrow-elbow-up-right-light.svg?v=681d406c792001899ac8883d50f993dad14b7224e203a4d5045ffe9bcf846fd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
