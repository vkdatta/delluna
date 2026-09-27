export const name="speech_to_text_2";
export const id="dl_a856595626d48af13267";
export const url=new URL("../icons/speech_to_text_2.svg?v=174f21c0e29d38776d345f18adf353016bab84ad3725b48521dc3afe0163188a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
