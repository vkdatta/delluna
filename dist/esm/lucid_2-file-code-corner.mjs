export const name="lucid_2-file-code-corner";
export const id="dl_6850d937020744ff8745";
export const url=new URL("../icons/lucid_2-file-code-corner.svg?v=b612e7743d91245b90b074fe50d06830571ee2e0f7093645d4abe2ac135f8fe8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
