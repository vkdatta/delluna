export const name="arrow-elbow-right-up-bold";
export const id="dl_83bf2571820f44d09f6d";
export const url=new URL("../icons/arrow-elbow-right-up-bold.svg?v=09bcd6af5e1170b2528e35d62de25601cbec7eb39d41d952d37aec095e04e0a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
