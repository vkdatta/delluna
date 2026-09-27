export const name="lucid_2-file-code-corner";
export const id="dl_6850d937020744ff8745";
export const url=new URL("../icons/lucid_2-file-code-corner.svg?v=e751d1a6ca18302a69fdd45bbc908250e4f153940767293950a43fbfc3f49083",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
