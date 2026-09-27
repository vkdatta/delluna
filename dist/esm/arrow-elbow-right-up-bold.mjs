export const name="arrow-elbow-right-up-bold";
export const id="dl_83bf2571820f44d09f6d";
export const url=new URL("../icons/arrow-elbow-right-up-bold.svg?v=1b96797de95acc8a63fabdf3e4caafe2a1eecd4aa6ad0664e1d6c304766be802",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
