export const name="lastfm-logo";
export const id="dl_ce99faf114b94aa0a802";
export const url=new URL("../../icons/L/lastfm-logo.svg?v=c31184406b65d1ce9888a357a569bc65a8df4527e3c69173eefe370678024789",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
