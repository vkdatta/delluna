export const name="exercise";
export const id="dl_798f286cd6d34971b94e";
export const url=new URL("../icons/exercise.svg?v=90524c6eba4f20d420d9b1af27ad06abb8bb93fbd31a27b29f2c23053e6665df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
