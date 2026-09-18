export const name="sentiment_content";
export const id="dl_c8f1a2c9a29240ce8997";
export const url=new URL("../icons/sentiment_content.svg?v=bbd9c08623154a523f71b5c5eade0dd70e3adb936cb4d4f1da2ad68d8a07f031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
