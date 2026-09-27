export const name="arrow-elbow-right-down";
export const id="dl_011717ec590a47b4b750";
export const url=new URL("../icons/arrow-elbow-right-down.svg?v=02d8b0bb5d2eadd7596ec96a3a35cae41a65dcceb83850b6abaa957301f29da4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
