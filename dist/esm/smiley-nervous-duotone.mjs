export const name="smiley-nervous-duotone";
export const id="dl_90e6f25adc66f891eb25";
export const url=new URL("../icons/smiley-nervous-duotone.svg?v=355534b5108675b420110e41591576a87ef59bf66236ef0e894a550fd42877e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
